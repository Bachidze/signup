import { yupResolver } from '@hookform/resolvers/yup'
import './App.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface SubmitType {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email('Invalid email format'),
  password: yup.string().required('Password is required').min(6, 'min  6 characters').max(20, 'Password is too long'),
  firstname: yup.string().required('First name is required').matches(/^[a-zA-Z]+$/,'Only Letters').max(20, 'firstname is too long'),
  lastname: yup.string().required('Last name is required').matches( /^[a-zA-Z]+$/,'Only Letters').max(20, 'lastname is too long')
})

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm<SubmitType,any>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: SubmitType) => {
    console.log(data)
  }

  console.log('errors', errors)

  return (
    <>
    <main className='xl:flex w-[75%]  m-auto justify-between items-center h-[100vh]'>

      <section className='flex justify-center flex-col text-center mt-[88px] mb-[64px] xl:mb-0'>
        <h1 className='text-[28px] text-white font-bold w-[327px] m-auto leading-[36px] mb-4 xl:text-[50px] xl:leading-[55px] xl:w-[525px] xl:text-left'>Learn to code by watching others</h1>
        <p className='text-white text-center text-[18px] leading-[26px] w-[327px] m-auto xl:text-[16px] xl:w-[525px] xl:text-left'>
          See how experienced developers solve problems in 
          real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.
        </p>
      </section>

      <section className='flex flex-col  justify-center items-center mb-[88px] xl:mb-0'>
      <div className='mb-[24px] w-[327px] bg-[#5E54A4] h-auto pt-4 pb-4 pl-[67px] pr-[67px] rounded-[15px] shadow-xl xl:w-[540px]'>
          <h3 className='text-[15px] leading-[26px] text-white w-[194px] m-auto text-center xl:w-[100%]'><span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter</h3>
        </div>
        <div className='bg-white p-6 rounded-[10px]  flex flex-col justify-center items-center shadow-2xl xl:w-[540px] xl:p-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 xl:gap-5'>
            
              
              <input  className='w-[279px] h-[56px] placeholder:text-[#3D3B48] pl-[19.41px] text-[14px] leading-[26px] font-semibold  border-2 rounded-[5px] xl:w-[460px] ' type="text" placeholder='First Name' {...register('firstname')} />
              {errors.firstname && <p className='text-[red] h-[10px] relative bottom-3 italic'>{errors.firstname.message}</p>}
            
              
              <input  className='w-[279px] h-[56px] placeholder:text-[#3D3B48] pl-[19.41px] text-[14px] leading-[26px] font-semibold  border-2 rounded-[5px] xl:w-[460px] ' type="text" placeholder='Last Name' {...register('lastname')} />
              {errors.lastname && <p className='text-[red]  h-[10px] relative bottom-3 italic'>{errors.lastname.message}</p>}
            
              
              <input  className='w-[279px] h-[56px] placeholder:text-[#3D3B48] pl-[19.41px] text-[14px] leading-[26px] font-semibold  border-2 rounded-[5px] xl:w-[460px] ' type="email" placeholder='Email' {...register('email')} />
              {errors.email && <p className='text-[red] h-[10px] relative bottom-3 italic'>{errors.email.message}</p>}
            
              
              <input  className='w-[279px] h-[56px] placeholder:text-[#3D3B48] pl-[19.41px] text-[14px] leading-[26px] font-semibold  border-2 rounded-[5px] xl:w-[460px] ' type="password" placeholder='Password' {...register('password')} />
              {errors.password && <p className='text-[red] h-[10px] relative bottom-3 italic'>{errors.password.message}</p>}
            <button className='w-[279px] h-[56px]  border-2 rounded-[5px] text-white leading-[26px] text-[15px] font-semibold bg-[#38CC8B] cursor-pointer xl:w-[460px]  ' type='submit'>CLAIM YOUR FREE TRIAL</button>
          </form>
          <p className='w-[219px] m-auto pt-2 text-center text-[11px] xl:w-[100%]'>By clicking the button, you are agreeing to our <span className='text-[#FF7979] font-bold'>Terms and Services</span></p>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
