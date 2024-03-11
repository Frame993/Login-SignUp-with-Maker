interface Props {
    name?: string
    action: () => void
}

export default function Submit({action, name} : Props) {
  return (
    <>
      <button className="button-action mt-12" onClick={action}>{name}</button>
    </>
  )
}
