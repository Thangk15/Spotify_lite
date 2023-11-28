import React, { useContext } from 'react';
import { MyContext } from '../Context';
import { IoCloudDownloadSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

export default function ListSongs() {
    const {dataSongs, idPlaying, setIdPlaying} = useContext(MyContext)
    // console.log(dataSongs)
    const HandlePlaySong=(id)=>{
        setIdPlaying(id)
    }

    return (
        <div className='col-span-2 overflow-auto'>
            <table className='min-w-full'>
                <thead className='text-white h-12'>
                <tr className=''>
                    <th className='w-[10%] sticky top-0 bg-gray-600'>id</th>
                    <th className='sticky top-0 bg-gray-600 text-left'>title</th>
                    <th className='w-[20%] sticky top-0 bg-gray-600'>author</th>
                    <th className='w-[10%] sticky top-0 bg-gray-600 items-center'>
                        <IoCloudDownloadSharp className='w-full'/>
                    </th>
                </tr>
                </thead>
                <tbody className="overflow-y-auto">
                {dataSongs.map((song, index) => (
                    <tr 
                        key={index} 
                        className={`h-12 text-gray-100 hover:bg-gray-800
                        hover:text-gray-200 ${idPlaying === song.id && 'text-green-600 hover:text-green-600'}`}
                        onClick={()=>HandlePlaySong(song.id)}
                    >
                        <td>{index + 1}</td>
                        <td className='text-left'>{song.name}</td>
                        <td>{song.author}</td>
                        <td>
                            <a href={song.url}>
                                <IoMdDownload className='w-full'/>
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
