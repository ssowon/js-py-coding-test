count = 1

while True :
    L, P, V = input().split()
    if L == '0':
        break
    days = 0
    chance, remain = divmod(int(V), int(P))

    days += int(L) * chance
    days += remain if int(L) > remain else int(L)

    print(f'Case {str(count)}: {str(days)}')
    count += 1