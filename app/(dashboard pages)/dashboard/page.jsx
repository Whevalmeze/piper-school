import DashboardProfile from '@/components/DashboardProfile'
import Overview from '@/components/Overview'
import { RegistrationTable } from '@/components/RegistrationTable'
import TeacherProfile from '@/components/TeacherProfile'

const Dashboard = () => {
  return (
    <>
      <DashboardProfile user={{firstname: "Ade", lastname: "Emmenauel"}} />
      <div className='flex gap-3 justify-between'>
        <Overview />
        <TeacherProfile />
      </div>
      <div className='border border-arapawa-200 rounded-lg'>
        <RegistrationTable className="border border-arapawa-100"/>
      </div>
    </>
  )
}

export default Dashboard;