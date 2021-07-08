function CreateForm({onCreate, stand}){
    return(
        <form onSubmit={onCreate} className='bg-green-300 p-8 rounded-3xl ' >
                <h2 className='font-medium text-center pb-3 text-xl' >Create Cookie Stand</h2>
                <label className='px-5' >Location</label>
                <input className="w-10/12" type="text" id = 'location' required /> <br/>
                <div className='grid grid-cols-3 p-4 float-left' >
                    <div className='bg-green-100 p-4 rounded-xl m-2'>
                        <label className='p-2'>Minimum Customer per Hour</label><br/>
                        <input className='w-full'  name="min" type="number" id = 'min' required />
                    </div>
                    <div className='bg-green-100 p-4 rounded-xl m-2' >
                        <label className='p-2' >Maximum Customer per Hour</label><br/>
                        <input className='w-full'  name="max" type="number" id = 'max' required />
                    </div>
                    <div className='bg-green-100 p-4 rounded-xl m-2' >
                        <label  className='p-2'>Average Cookies per Sale </label><br/>
                        <input className='w-full'  name="avg" type="number" id = 'avg' required />
                    </div>
                </div>
                <button className='text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100 ' type='submit' >Create</button>
        </form>
    )
}

export default CreateForm;