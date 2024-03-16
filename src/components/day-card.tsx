import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Song } from "@/types/Song";


type DayCardProps = {
    dayData: Song[];
}

export function DayCard({dayData}: DayCardProps) {
    
    const [topSong, setTopSong] = useState<Song>(dayData[0]);
    const [url, setUrl] = useState("");
    const baseUrl = "https://open.spotify.com/track/";
    const height = 148;
    const width = 148;

    function searchForTopSong() {
        let maxCount = 0;
        let topSong = dayData[0];
        dayData.forEach(song => {
            let currPlayedAtLen = song.playedAt.length;
            if (currPlayedAtLen > maxCount) {
                topSong = song;
                maxCount = currPlayedAtLen;
            }
        })
        setUrl(`${baseUrl}${topSong.trackId}`);
        return topSong;
    }

    useEffect(() => {
        if (dayData) {
            setTopSong(searchForTopSong());
        }
    }, [dayData[0]]);
    
    if (!dayData) {
        return (
            <div className="h-64 w-64 bg-gray-200"></div>
        );
    }

    return (
        <div className="flex flex-col items-center mb-2">
            <div className={`h-${height} w-${width}`}>
                <p className="text-center text-gray">
                    {topSong.playedAt[0].split(' ')[0]}
                </p>
                <Image
                    src={topSong.albumCover}
                    title={`${topSong.trackName} - ${topSong.trackArtist} - ${topSong.album}`}
                    alt={`${topSong.trackName} - ${topSong.trackArtist} - ${topSong.album}`}
                    width={width}
                    height={height}
                    priority={true}
                    quality={100}
                />
                <div className={`max-w-[${width}px]`}>
                    <p className='text-center'>
                        <Link className="hover:underline" href={url} target="_blank" 
                            title={`${topSong.trackName} - ${topSong.trackArtist}`}>
                                {topSong.trackName}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}