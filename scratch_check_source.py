import urllib.request, re

with urllib.request.urlopen('https://srmglobalhospitals.com/wp-content/uploads/elementor/css/post-35585.css') as res:
    css = res.read().decode('utf-8', errors='ignore')

for block in css.split('}'):
    if any(k in block for k in ['6dff8e5', 'db9f686', '52de3a2', 'background', 'border-radius', 'padding']):
        if any(x in block for x in ['6dff8e5', 'db9f686', '52de3a2', 'c52693c', '1f516fa', '21f69d7', '87ad5b2', '22a7e4f']):
            print(block.strip() + '}')
