import DashboardProfile from '@/components/DashboardProfile'
import Overview from '@/components/Overview'
import TeacherProfile from '@/components/TeacherProfile'

const Dashboard = () => {
  return (
    <main className='p-6 w-full flex flex-col gap-3 container min-h-full'>
      <DashboardProfile user={{firstname: "Ade", lastname: "Emmenauel"}} />
      <div className='flex justify-between'>
        <Overview />
        <TeacherProfile />
      </div>
    </main>
  )
}

export default Dashboard