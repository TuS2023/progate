# 文字列のキーと数値の値を持つ辞書を作って、変数 items に代入してください
items = {'apple': 100, 'banana': 200, 'orange': 400}

for item_name in items:
    print('---------------------------------------------')
    print(item_name + 'は1個' + str(items[item_name]) + '円です')