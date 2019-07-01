export interface IImageData {}

export interface IAlbumData {
  albums: {
    name: string;
    id: string;
    label: string;
    genres: [];
    images: [{ height: number; width: number; url: string }];
    artists: [
      {
        id: string;
        name: string;
      }
    ];
    tracks: [
      {
        artits: [];
        duration_ms: number;
        explicit: boolean;
        id: string;
        name: string;
        preview_url: string;
      }
    ];
  };
}
