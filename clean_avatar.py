from PIL import Image, ImageDraw, ImageFilter
import numpy as np

def defringe(img, threshold=220, radius=2):
    """Remove white fringe/halo from edges of a transparent image."""
    data = np.array(img)
    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Find pixels that are semi-transparent (edge pixels with white contamination)
    # These are typically bright pixels near the transparency boundary
    is_edge = (a > 0) & (a < 255)
    is_bright = (r.astype(int) + g.astype(int) + b.astype(int)) > (threshold * 3)
    
    # For edge pixels that are too bright, reduce their alpha
    mask = is_edge & is_bright
    data[mask, 3] = 0
    
    # Also find fully opaque pixels that are very close to white (leftover bg)
    is_opaque_white = (a == 255) & is_bright
    # Check if they are near transparent pixels
    alpha_blurred = Image.fromarray(a).filter(ImageFilter.MinFilter(size=3))
    alpha_blurred_arr = np.array(alpha_blurred)
    near_edge = alpha_blurred_arr < 255
    
    leftover = is_opaque_white & near_edge
    data[leftover, 3] = 0
    
    return Image.fromarray(data)

def remove_bg_clean_png(input_path, output_path, tolerance=35):
    img = Image.open(input_path).convert("RGBA")
    # Flood fill from corners
    ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width - 1, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (0, img.height - 1), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width - 1, img.height - 1), (255, 255, 255, 0), thresh=tolerance)
    # Defringe
    img = defringe(img)
    img.save(output_path, "PNG")
    print(f"Saved clean PNG: {output_path}")

def remove_bg_clean_gif(input_path, output_path, tolerance=35):
    gif = Image.open(input_path)
    frames = []
    durations = []
    
    for i in range(gif.n_frames):
        gif.seek(i)
        frame = gif.convert("RGBA")
        durations.append(gif.info.get("duration", 70))
        
        # Flood fill from corners
        ImageDraw.floodfill(frame, (0, 0), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (frame.width - 1, 0), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (0, frame.height - 1), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (frame.width - 1, frame.height - 1), (255, 255, 255, 0), thresh=tolerance)
        
        # Defringe
        frame = defringe(frame)
        frames.append(frame)
        
        if i % 10 == 0:
            print(f"  Processed frame {i + 1}/{gif.n_frames}")
    
    # Save as animated GIF with transparency
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        disposal=2,
        transparency=0,
    )
    print(f"Saved clean GIF: {output_path}")

if __name__ == "__main__":
    # Re-process from the ORIGINAL source files
    print("=== Cleaning idle PNG ===")
    remove_bg_clean_png(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_idle.png",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_idle.png",
        tolerance=35
    )
    
    print("=== Cleaning animated GIF (76 frames) ===")
    remove_bg_clean_gif(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\GIF\Avatar GIF.gif",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar.gif",
        tolerance=35
    )
    print("Done!")
