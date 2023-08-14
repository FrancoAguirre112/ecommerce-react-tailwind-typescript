interface RecommendedProps {
    items: JSX.Element[];
  }

const Recommended = ({items }: RecommendedProps) => {
    const shortItems = items.slice(0, 4);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {shortItems.map((item, index) => (
            <div key={index}>
              {item}
            </div>
          ))}
    </div>
  )
}

export default Recommended