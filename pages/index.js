import AppBar from "@comp/appBar";
import TaskList from "@comp/taskList";
import { useRouter } from 'next/router';
import AppConst from "@lib/appConst"
import Test from "@comp/test"

export default function Home() {
  const router = useRouter()

  /**
   * タスク追加
   */
  const addTask = () => {
    router.push(AppConst.URL.INPUT)
  }
  return (
    <>
      <AppBar onButtonClick={addTask}/>
      <TaskList />
      {/* <Test /> */}
    </>
  )
}
