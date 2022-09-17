import TaskList from '@/features/todo/TaskList'
import { Container } from '@mui/material'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router-dom'
import { taskListQuery } from './__generated__/taskListQuery.graphql'

const TaskListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const data = useLazyLoadQuery<taskListQuery>(
    graphql`
      query taskListQuery($id: ID!) {
        node(id: $id) {
          ... on TaskDocket {
            ...TaskList_taskDocket
          }
        }
      }
    `,
    { id: id as string }
  )

  if (!data.node || !id) return <></>

  return (
    <Container maxWidth='xs' sx={{ marginTop: 2 }}>
      <TaskList queryRef={data.node} taskDocketId={id} />
    </Container>
  )
}

export default TaskListPage
