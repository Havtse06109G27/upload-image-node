/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    ContextMenu,
    ContextMenuTrigger
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils"
import { useQuery } from '@tanstack/react-query';
import { getImages } from "@/apis/imageAPI"

const baseURL = 'http://localhost:3000/';

export function Album({ className }: any) {
    const { data } = useQuery({
        queryKey: ['images'],
        queryFn: () => getImages(),
    })
    return (
        <div className={cn("space-y-3", className)}>
            {data?.data?.map((item: any) => (
                <div key={item._id}>
                    <ContextMenu>
                        <ContextMenuTrigger>
                            <div className="overflow-hidden rounded-md">
                                <img src={baseURL + item.path} className={cn("h-auto w-auto object-cover transition-all hover:scale-105")} />
                            </div>
                        </ContextMenuTrigger>
                    </ContextMenu>
                    <div className="space-y-1 text-sm">
                        <h3 className="font-medium leading-none">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}