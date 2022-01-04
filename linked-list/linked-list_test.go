package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLinkedList(t *testing.T) {

	linkedList := NewLinkedList("head")

	linkedList.Add("value 1")
	linkedList.Add("value 2")
	linkedList.Add("value 3")
	linkedList.Add("value 4")

	assert.Equal(t, "head", linkedList.Head.Value)
	assert.Equal(t, "value 1", linkedList.Head.Next.Value)
	assert.Equal(t, "value 2", linkedList.Head.Next.Next.Value)
	assert.Equal(t, "value 3", linkedList.Head.Next.Next.Next.Value)
	assert.Equal(t, "value 4", linkedList.Head.Next.Next.Next.Next.Value)
}
