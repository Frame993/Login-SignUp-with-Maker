interface Props {
    action: () => void
}

export default function Submit({action} : Props) {
  return (
    <>
      <button className="button-action" onClick={action}>Log In</button>
    </>
  )
}
