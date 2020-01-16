# var = raw_input("enter your string")
# i = 0
# new = []
# new_1 = []
# while i < len(var):
#     j = 0
#     count = 0
#     while j < len(var):
#         if var[i] == var[j]:var = ["a","n","n","a","a","g","g","a","n","a","k"]
# i = 0
# new = []
# new_1 = []
# while i < len(var):
#     j = 0
#     count = 0
#     while j < len(var):
#         if var[i] == var[j]:
#             count = count + 1
#         j = j + 1
#     new.append([var[i],count])
#     if new[i] not in new_1:
#         new_1.append(new[i])
#     i = i + 1
# print new_
#             count = count + 1
#         j = j + 1
#     new.append([var[i],count])
#     if new[i] not in new_1:
#         new_1.append(new[i])
#     i = i + 1
# print new_1

CHARS = 26
def isValidString(str): 
  
    freq = [0]*CHARS 
    for i in range(len(str)): 
        # freq[ord(str[i])-ord('a')] += 1

isValidString("abc")