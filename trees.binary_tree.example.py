from trees import BinaryTreeNode

"""
                A
                |
          -------------
         |             |
         B             C
         |      
    ----------- 
    |           |
    D           E
    |
   ---
    |
    F
"""

A = BinaryTreeNode('A')
B = BinaryTreeNode('B')
C = BinaryTreeNode('C')
D = BinaryTreeNode('D')
E = BinaryTreeNode('E')
F = BinaryTreeNode('F')

A.set_left(B)
A.set_right(C)
B.set_left(D)
B.set_right(E)
D.set_left(F)

# BinaryTreeNode.print_tree(A)
# BinaryTreeNode.preorder(A)
# BinaryTreeNode.inorder(A)
# BinaryTreeNode.postorder(A)
# print(F.get_root().get_value())
