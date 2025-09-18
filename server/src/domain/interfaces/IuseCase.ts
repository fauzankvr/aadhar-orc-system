
export interface IocrUseCase {
  parseAdhar(images: { frontImage: string; backImage: string }): Promise<any>;
}