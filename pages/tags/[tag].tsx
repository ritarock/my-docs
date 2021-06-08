import { useRouter } from 'next/router'
import Header from '../../components/header'

export default function Tags() {
  const router = useRouter()
  const {tag} = router.query


  return (
    <div>
      <Header />
      TAG: {tag}
    </div>
  )
}
