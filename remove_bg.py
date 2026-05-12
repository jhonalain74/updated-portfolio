from PIL import Image, ImageDraw

def remove_background(input_path, output_path, tolerance=10):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # We will do a simple BFS flood fill from the edges to find background pixels
    width, height = img.size
    
    # Create a mask of the background
    background_mask = set()
    
    # Target color is the top-left pixel
    target_color = img.getpixel((0, 0))
    
    def color_distance(c1, c2):
        return sum(abs(a - b) for a, b in zip(c1[:3], c2[:3]))
        
    def is_background(x, y):
        c = img.getpixel((x, y))
        return color_distance(c, target_color) <= tolerance

    # Initialize queue with pixels along the borders
    queue = []
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    visited = set(queue)
    
    while queue:
        x, y = queue.pop(0)
        
        if is_background(x, y):
            background_mask.add((x, y))
            
            # Check neighbors
            for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # Now create a new image making the mask transparent
    new_data = []
    for y in range(height):
        for x in range(width):
            if (x, y) in background_mask:
                new_data.append((255, 255, 255, 0)) # transparent
            else:
                new_data.append(img.getpixel((x, y)))
                
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background(
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_front.png",
        r"c:\Users\ADMIN\OneDrive\Documents\portfolio\src\assets\avatar_front_bg_removed.png",
        tolerance=30
    )
