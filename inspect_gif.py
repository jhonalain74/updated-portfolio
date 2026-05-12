from PIL import Image

img = Image.open(r"c:\Users\ADMIN\OneDrive\Documents\portfolio\GIF\Avatar GIF.gif")
print(f"Size: {img.size}")
print(f"Frames: {img.n_frames}")
print(f"Duration: {img.info.get('duration', 'N/A')}ms per frame")
print(f"Loop: {img.info.get('loop', 'N/A')}")

# Extract first frame as PNG for the idle state
img.seek(0)
first_frame = img.convert("RGBA")
first_frame.save(r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_idle.png", "PNG")
print("Saved first frame as avatar_idle.png")
