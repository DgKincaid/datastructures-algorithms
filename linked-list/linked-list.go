package main

import "fmt"

// Node object to store next and data
type Node struct {
	Next  *Node
	Value string
}

// LinkedList linked list struct
type LinkedList struct {
	Head *Node
}

// NewLinkedList creates a new linked list
func NewLinkedList(value string) *LinkedList {
	return &LinkedList{
		Head: &Node{Next: nil, Value: value},
	}
}

// Add value to linked list
func (l *LinkedList) Add(value string) {
	node := Node{Next: nil, Value: value}

	currentNode := l.Head

	for currentNode.Next != nil {
		currentNode = currentNode.Next
	}

	currentNode.Next = &node
}

//Print prints linked list
func (l *LinkedList) Print() {
	node := l.Head

	fmt.Println(node.Value)

	for node.Next != nil {
		node = node.Next

		fmt.Println(node.Value)
	}
}

// Count count elements in linked list
func (l *LinkedList) Count() int {
	var count int

	node := l.Head

	for node != nil {
		count++

		node = node.Next
	}

	return count
}
