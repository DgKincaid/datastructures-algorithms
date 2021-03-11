package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLinkedList(t *testing.T) {

	linkedList := NewLinkedList("test value")

	linkedList.Add("another value 1")
	linkedList.Add("another value 2")
	linkedList.Add("another value 3")
	linkedList.Add("another value 4")

	// fmt.Print(linkedList)

	// linkedList.Print()

	assert.True(t, false)
}
