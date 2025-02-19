import closeIcon from "../assets/close.svg";
// eslint-disable-next-line react/prop-types
const Title = ({Modal, setModal}) => {
  return (
     <div className="flex items-center justify-between ">
                    <h3 className="font-semibold text-3xl">Add New Task</h3>
                    <img
                      src={closeIcon}
                      alt="close-btn"
                      className="cursor-pointer w-6 h-6"
                      onClick={() => setModal(!Modal)}
                    />
                  </div>
  )
}

export default Title