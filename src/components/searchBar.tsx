import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { search } from '@/services/service';

const searchPhotos = () =>{
    document.getElementById('textSearch')?.innerHTML;
    search(`/search/photos?query=${document.getElementById('textSearch')?.innerText}&per_page=12`, (data: any) => {
    });
}

export default function SearchBar() {
    return (
        <div>
            <Input placeholder="Buscar fotos..." id='textSearch'/>
            <Button>Buscar</Button>
        </div>
    );
}