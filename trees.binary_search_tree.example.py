from trees import BinarySearchTreeNode
from random import shuffle

data = [i for i in range(20)]
shuffle(data)

firstNode = BinarySearchTreeNode(data[0])

for i in data[1:]:
    firstNode.insert_node(i)

print(data)
re_ordered_data = []
BinarySearchTreeNode.inorder(firstNode, function=lambda node: re_ordered_data.append(node.get_value()))
print(re_ordered_data)
