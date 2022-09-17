import { TaskDocketList } from '@/features/todo/TaskDocketList'
import { Grid, Stack } from '@mui/material'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { Outlet } from 'react-router-dom'
import { taskDocketListQuery } from './__generated__/taskDocketListQuery.graphql'

const TaskDocketListPage = () => {
  const data = useLazyLoadQuery<taskDocketListQuery>(
    graphql`
      query taskDocketListQuery {
        me {
          ...TaskDocketList_me
        }
      }
    `,
    {}
  )

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item sx={{ width: 150, bgcolor: 'hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%)' }} container justifyContent='center'>
        <TaskDocketList accountRef={data.me} />
      </Grid>
      <Grid item xs sx={{ background: 'hsl(220,calc(var(--saturation-factor, 1)*7.7%),22.9%)' }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default TaskDocketListPage
