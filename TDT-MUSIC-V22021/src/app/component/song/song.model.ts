export class SongModel {
  id: number = 0;
  title: string = '';
  description: string = '';
  mp3: any;
  image: string = '';
  artist: string = '';
  singer_id: number = 0;
  user_id: number = 0;
  genre: string = '';
  album: string = '';
  listens !: number;
}
