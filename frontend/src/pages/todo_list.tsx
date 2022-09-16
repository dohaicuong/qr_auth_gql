import { TaskCreateField } from '@/features/todo/TaskCreateField'
import TaskList from '@/features/todo/TaskList'
import { Container } from '@mui/material'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { todoListQuery } from './__generated__/todoListQuery.graphql'

const TodoListPage = () => {
  const data = useLazyLoadQuery<todoListQuery>(
    graphql`
      query todoListQuery {
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

export default TodoListPage
