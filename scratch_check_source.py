import re

with open(r'C:\Users\bvidy\.gemini\antigravity-ide\brain\05b0de86-c92c-4a0b-9820-9525ee2569d7\.system_generated\steps\17\content.md', 'r', encoding='utf-8', errors='ignore') as f:
    raw = f.read()

# Header top items
print("HEADER ITEMS:")
sub = raw[240000:280000]
for m in re.finditer(r'<li[^>]*class="[^"]*elementor-icon-list-item[^"]*"[^>]*>(.*?)</li>', sub, re.DOTALL):
    item = m.group(1)
    clean = ' '.join(re.sub(r'<[^>]+>', ' ', item).split())
    links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', item)
    print(f"- {clean} -> {links}")

print("\nHEADER BUTTONS / CTAS:")
for m in re.finditer(r'<a[^>]*class="[^"]*elementor-button[^"]*"[^>]*>(.*?)</a>', sub, re.DOTALL):
    btn = m.group(1)
    clean = ' '.join(re.sub(r'<[^>]+>', ' ', btn).split())
    print(f"- Button: {clean}")
