from PIL import Image, ImageDraw

def remove_bg_png(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    # Flood fill from all 4 corners
    ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width - 1, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (0, img.height - 1), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width - 1, img.height - 1), (255, 255, 255, 0), thresh=tolerance)
    img.save(output_path, "PNG")
    print(f"Saved transparent PNG: {output_path}")

def remove_bg_gif(input_path, output_path, tolerance=30):
    gif = Image.open(input_path)
    frames = []
    durations = []
    
    for i in range(gif.n_frames):
        gif.seek(i)
        frame = gif.convert("RGBA")
        durations.append(gif.info.get("duration", 70))
        
        # Flood fill from all 4 corners to remove white bg
        ImageDraw.floodfill(frame, (0, 0), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (frame.width - 1, 0), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (0, frame.height - 1), (255, 255, 255, 0), thresh=tolerance)
        ImageDraw.floodfill(frame, (frame.width - 1, frame.height - 1), (255, 255, 255, 0), thresh=tolerance)
        
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
        transparency=0
    )
    print(f"Saved transparent GIF: {output_path}")

if __name__ == "__main__":
    # 1. Remove bg from idle PNG
    remove_bg_png(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_idle.png",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_idle.png",
        tolerance=30
    )
    
    # 2. Remove bg from animated GIF
    remove_bg_gif(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\GIF\Avatar GIF.gif",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar.gif",
        tolerance=30
    )
