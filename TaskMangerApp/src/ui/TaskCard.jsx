import { Edit2, Trash2Icon } from 'lucide-react'

const TaskCard = ({title,description,category,date,onEdit,OnDelete,onComplete}) => {
  return (
    <div className='flex justify-between bg-white border border-gray-300 rounded-xl p-4'>
      <section className='flex gap-4 items-top'>
        <div className='border-2 border-gray-500 rounded bg-white w-6 h-6 hover:cursor-pointer'onClick={onComplete}></div>
        <div>
          <h1 className='font-semibold'>{title}</h1>
          <p>{description}</p>
          <div className='flex items-center gap-3 pt-3'>
            <div className='text-sm rounded-2xl px-3 py-1.5 bg-gray-300 w-fit'>{category}</div>
            <p className='text-sm'>{date}</p>
          </div>
        </div>
      </section>
      <div className='flex justify-center gap-6'>
        <Edit2 onClick={onEdit} className='hover:cursor-pointer hover:text-blue-700'/>
        <Trash2Icon onClick={OnDelete} className='hover:cursor-pointer hover:text-red-500'/>
      </div>
    </div>
  )
}

export default TaskCard