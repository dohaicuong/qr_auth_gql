import TaskList from '@/features/todo/TaskList'
import { Container } from '@mui/material'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { taskListQuery } from './__generated__/taskListQuery.graphql'

const TaskListPage = () => {
  const data = useLazyLoadQuery<taskListQuery>(
    graphql`
      query taskListQuery {
        ...TaskList_query
      }
    `,
    {}
  )

  return (
    <Container maxWidth='xs' sx={{ marginTop: 2 }}>
      <TaskList queryRef={data} />
    </Container>
  )
}

export default TaskListPage
