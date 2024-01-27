apple_price = 200
apple_count = 8

total_price = apple_price * apple_count

print(total_price)


money = 2000
print(money)

money = money + 5000

print(money)

my_name = 'にんじゃわんこ'

print('私は' + my_name +'です')

age = 24
print('私は'+ str(age) + '歳です')

count = '5'
print(int(count) + 1)

x = 7 * 10
y = 5 * 6


if x == 70:
    print('xは70です')


if y != 40:
    print('yは40ではありません')

x = 10
if x > 30:
    print('xは30より大きいです')


money = 500
apple_price = 200
if money >= apple_price:
    print('りんごを買うことができます')
    
money = 100
apple_price = 100

if money > apple_price:
    print('りんごを買うことができます')
elif money == apple_price:
    print('りんごを買うことができますが所持金が0になります')
else:
    print('お金が足りません')
    

x = 20
if x >= 10 and x <= 30:
    print('xは10以上30以下です')


y = 60
if y < 10 or y > 30:
    print('yは10未満または30より大きいです')


z = 55
if not z == 77:
    print('zは77ではありません')