from PIL import Image, ImageFilter, ImageDraw

backup = r"c:\Users\ADMIN\OneDrive\Documents\portfolio\public\images\robot-contact-backup.jpg"
dest = r"c:\Users\ADMIN\OneDrive\Documents\portfolio\public\images\robot-contact.jpg"

img = Image.open(backup)
w, h = img.size

# Print pixel colors in the bottom-right corner area where user sees watermark
# The user's cropped screenshot shows the sparkle is near bottom of the desk, right side
print("Scanning bottom-right quadrant for semi-bright spots...")

# Check around x=820-880, y=470-540 (near bottom-right desk edge)
for y in range(440, h):
    for x in range(780, 920):
        r, g, b = img.getpixel((x, y))
        brightness = (r + g + b) / 3
        # The area is dark desk, so anything notably brighter is the sparkle
        if brightness > 160:
            print(f"  Bright pixel at ({x},{y}): rgb({r},{g},{b}) brightness={brightness:.0f}")

print("\n--- Also scanning center-bottom area ---")
for y in range(480, h):
    for x in range(500, 600):
        r, g, b = img.getpixel((x, y))
        brightness = (r + g + b) / 3
        if brightness > 160:
            print(f"  Bright pixel at ({x},{y}): rgb({r},{g},{b}) brightness={brightness:.0f}")
