import Navbar from "../components/navbar";
import Link from 'next/link';
import Footer from "../components/footer";

function Staffs() {
    return (
        <div className="bg-black">
            <Navbar />

            <main className="flex flex-col items-center justify-center min-h-fit pt-10 min-w-full ">

                <div className="flex flex-col pt-10 mt-10">
                    <h2 className="mb-4 text-2xl font-bold">Staff</h2>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <Cards name='Runin Mascot' position='Owner/Developer' dep="+ 50+ Prog Langs World, Record Holder, Full Stack Developer
, Block Chain Developer" pfp="https://cdn.discordapp.com/avatars/525761712209526804/03b1639fd28b3f892e8b3a5b23bf372c.png?size=4096" />
                        <Cards name='Amberon' position='Admin/Website Developer' dep="A guy wondering about our existence. Not that much though" pfp="https://cdn.discordapp.com/avatars/680439773021601838/27e84999fa2bb4c38fb882015e0bdc14.png?size=4096" />

                        <Cards name='Poison' position='Admin' dep="Not actually the poison" pfp="https://cdn.discordapp.com/avatars/555789442527264783/17a8947823b312278b9f2405cc19de93.png?size=4096" />
                        <Cards name='Elijah' position='Admin' dep="Just Dead, nothing more nothing less" pfp="https://cdn.discordapp.com/avatars/511919846427197441/dabf7f4c9ca3141fa4ce0a4854e32c83.png?size=4096" />


                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}
export default Staffs;



function Cards(props) {
    return (<div className="mx-auto right-0 mt-2 w-60 m-10">
        <div className="bg-black rounded-lg shadow-md mix-blend-screen shadow-red-600">
            <div class="text-center p-6 bg-black border-b">
                <div className="flex -space-x-1  sm:justify-center pb-2 pt-2 ">
                    <img className=" rounded-full w-20 ring-2" src={props.pfp} alt="" />

                </div>
                <p className="pt-2 text-lg font-semibold text-gray-50">{props.name}</p>
                <p className="text-sm text-gray-100">{props.position}</p>

            </div>


            <div className="">
                <button href="#" class="w-full px-4 py-2 pb-4  flex">
                    <p className="text-sm font-medium text-gray-400 leading-none text-start">{props.dep}
                    </p>
                </button>
            </div>
        </div>
    </div>);
}