import re
from pathlib import Path
from datetime import datetime

def prefix_files_with_date(directory_path):
    target_dir = Path(directory_path)
    valid_exts = {".jpg", ".jpeg", ".png"}

    if not target_dir.exists():
        print(f"Directory not found: {directory_path}")
        return

    for filepath in target_dir.iterdir():
        if filepath.is_file() and filepath.suffix.lower() in valid_exts:
            if re.match(r"^\d{4}-\d{2}-\d{2}_", filepath.name):
                continue
            
            stat = filepath.stat()
            ts = getattr(stat, 'st_birthtime', stat.st_mtime)
            
            dt = datetime.fromtimestamp(ts)
            date_prefix = dt.strftime("%Y-%m-%d_%H%M%S")
            
            new_filename = f"{date_prefix}_{filepath.name}"
            new_filepath = filepath.with_name(new_filename)
            
            filepath.rename(new_filepath)
            print(f"Renamed: {filepath.name} -> {new_filename}")

if __name__ == "__main__":
    IMG_DIR = "./public/art" 
    prefix_files_with_date(IMG_DIR)
    print("finished!")