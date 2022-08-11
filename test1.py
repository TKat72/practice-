# # n = 4
# # if (n %2)!=0:
# #     print("Weird")
# # elif (n%2)==0 and 2<= n <=5:
# #     print("hello")
# def containsValidBraces(testString):
#     # Write your code here
#     print(testString)
#     per =[]
#     brec = {"{":"}", "[":"]", "(":")", "}":"{", "]":"[", ")":"("}
#     for i in range(len(testString)):
#         if testString[i] == "(" or testString[i] == "[" or testString[i] == "{":
#             per.append(testString[i])
#             print("im here")
#         else:
#             if len(per) == 0:
#                 print("im here 2")
#                 return "invalid"
#             elif brec[testString[i]] == per[len(per)-1]:
#                 print("Im in del section")
#                 del per[len(per)-1]
#             else:
#                 print("im here 3")
#                 return "invalid"
#     if len(per) !=0:
#         print("im here 4")
#         print(per)
#         return 'invalid'
#     return "valid"

# containsValidBraces(["(",")"])
# print(containsValidBraces(["(",")"]))




# def validBraces(string):
#     parenthesis = []
#     pardict = {"{":"}", "[":"]", "(":")", "}":"{", "]":"[", ")":"("}
#     for i in range(len(string)):
#         if string[i] == "(" or string[i] == "[" or string[i] == "{":
#             parenthesis.append(string[i])
#         else:
#             if len(parenthesis) == 0:
#                 return False
#             elif pardict[string[i]] == parenthesis[len(parenthesis)-1]:
#                 del parenthesis[len(parenthesis)-1]
#             else:
#                 return False
#     if len(parenthesis) != 0:
#         return False
#     print(parenthesis)
#     return True

# validBraces(["(",")"])

print( 1990 / 4)
