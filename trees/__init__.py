class TreeNode:
    def __init__(self, value):
        self.value = value
        self.parent = None
        self.left = None
        self.right = None

    def __set_parent(self, node):
        node.parent = self

    def is_root(self):
        return self.parent is None

    def get_value(self):
        return self.value

    def get_parent(self):
        return self.parent

    def get_root(self):
        if self.is_root():
            return self
        else:
            return TreeNode.get_root(self.get_parent())

    def get_left(self):
        return self.left

    def get_right(self):
        return self.right

    @staticmethod
    def print_tree(root):
        if isinstance(root, TreeNode):
            print(root.get_value())
            TreeNode.print_tree(root.get_left())
            TreeNode.print_tree(root.get_right())

    @staticmethod
    def preorder(root, function=lambda node: print(node.get_value())):
        if isinstance(root, TreeNode):
            function(root)
            TreeNode.preorder(root.get_left(), function=function)
            TreeNode.preorder(root.get_right(), function=function)

    @staticmethod
    def inorder(root, function=lambda node: print(node.get_value())):
        if isinstance(root, TreeNode):
            TreeNode.inorder(root.get_left(), function=function)
            function(root)
            TreeNode.inorder(root.get_right(), function=function)

    @staticmethod
    def postorder(root, function=lambda node: print(node.get_value())):
        if isinstance(root, TreeNode):
            TreeNode.postorder(root.get_left(), function=function)
            TreeNode.postorder(root.get_right(), function=function)
            function(root)


class BinaryTreeNode(TreeNode):
    def set_left(self, node):
        self.left = node
        node.parent = self

    def set_right(self, node):
        self.right = node
        node.parent = self


class BinarySearchTreeNode(TreeNode):

    def __set_left(self, node):
        self.left = node
        node.parent = self

    def __set_right(self, node):
        self.right = node
        node.parent = self

    @staticmethod
    def _insert_node(node, value):
        if node is None:
            return BinarySearchTreeNode(value)
        else:
            if value > node.get_value():
                node.__set_right(BinarySearchTreeNode._insert_node(node.get_right(), value))
            else:
                node.__set_left(BinarySearchTreeNode._insert_node(node.get_left(), value))
            return node

    def insert_node(self, value):
        root = self.get_root()
        BinarySearchTreeNode._insert_node(root, value)


