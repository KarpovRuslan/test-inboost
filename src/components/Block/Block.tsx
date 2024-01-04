import React from 'react';
import 'reactflow/dist/style.css';
import ReactFlow, {
    EdgeChange,
    NodeChange,
    Connection,
    Background,
  } from "reactflow"

  import { Node } from "../Node"
  import {
    onNodesChange,
    onEdgesChange,
    selectEdges,
    selectNodes,
    onConnect,
  } from "../../store/slices/nodesSlice"
  import { useAppDispatch, useAppSelector } from "../../store/hooks"

const nodeTypes = {
    custom: Node,
  }

export default function Block() {
    const nodes = useAppSelector(selectNodes)
    const edges = useAppSelector(selectEdges)
    
    const dispatch = useAppDispatch()
    
  const onNodesChangeDispatch = (changes: NodeChange[]) =>
    dispatch(onNodesChange(changes))

  const onEdgesChangeDispatch = (changes: EdgeChange[]) =>
    dispatch(onEdgesChange(changes))

  const onConnectDispatch = (changes: Connection) =>
    dispatch(onConnect(changes))
   
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChangeDispatch}
          onEdgesChange={onEdgesChangeDispatch}
          onConnect={onConnectDispatch}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
        >
        <Background color="#aaa" gap={16}/>
        </ReactFlow>
      </div>
    );
  }

