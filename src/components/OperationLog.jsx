import React from 'react'

function OperationLog({operationLog}) {
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog
