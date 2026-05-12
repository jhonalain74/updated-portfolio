from PIL import Image, ImageDraw
import sys

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    
    # Create a mask image to floodfill
    # We will floodfill the background on the mask
    mask = Image.new("L", img.size, 0)
    
    # To floodfill, we need a version of the image to work on. 
    # PIL floodfill replaces colors. We want to find the background pixels.
    # Instead, let's just make the image transparent directly
    
    ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width-1, 0), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (0, img.height-1), (255, 255, 255, 0), thresh=tolerance)
    ImageDraw.floodfill(img, (img.width-1, img.height-1), (255, 255, 255, 0), thresh=tolerance)
    
    # Save the result
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_front.png",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_front_bg_removed.png",
        tolerance=30
    )
