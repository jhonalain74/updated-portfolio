from PIL import Image

backup = r"c:\Users\ADMIN\OneDrive\Documents\portfolio\public\images\robot-contact-backup.jpg"
dest = r"c:\Users\ADMIN\OneDrive\Documents\portfolio\public\images\robot-contact.jpg"

img = Image.open(backup)
w, h = img.size
print(f"Original: {w}x{h}")

# Crop 40px from the bottom to remove the watermark area
# This is a subtle crop that won't noticeably affect the composition
cropped = img.crop((0, 0, w, h - 40))
print(f"Cropped: {cropped.size[0]}x{cropped.size[1]}")

cropped.save(dest, quality=95)
print("Saved cropped image!")
