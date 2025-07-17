import { createWorker, Worker } from "tesseract.js";

export class TesseractService {
  async extractText(imagePath: string): Promise<string> {
    const worker: Worker = await createWorker("eng");
    // Reinitialize the worker to ensure it is ready for text extraction
    await worker.reinitialize("eng");

    const {
      data: { text },
    } = await worker.recognize(imagePath);

    await worker.terminate();
    return text;
  }
}
