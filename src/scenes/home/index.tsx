import { SelectedPage } from '@/shared/type'

type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Home = ( { setSelectedPage }: Props) => {
  return (
    <div>Home</div>
  )
}

export default Home