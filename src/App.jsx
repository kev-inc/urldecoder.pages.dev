import { useState } from "react";

function App() {
  const [url, setUrl] = useState("")

  const genEncoded = () => {
    if (url === genDecoded()) {
      return encodeURIComponent(url)
    }
    return url
  }

  const genDecoded = () => {
    return decodeURIComponent(url)
  }

  return (
    <div className='bg-gray-100 h-screen flex flex-col'>
      <div className="text-xl font-semibold p-4 mb-2 border bg-white shadow-sm text-blue-500 text-center">
        URL Decoder
      </div>

      <div className='bg-white border p-4 mx-4 rounded-lg'>
        <div className="text-xl font-semibold text-blue-500 mb-3">URL</div>
        <input type="text" value={url} onChange={e => setUrl(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:border block w-full p-2.5" />
      </div>

      <div className="px-4 py-2 flex gap-4 h-full">
        <div className='bg-white border p-4 rounded-lg flex-1 flex flex-col'>
          <div className="text-xl font-semibold text-blue-500 mb-3">Decoded URL</div>
          <pre className='flex-1'>
            <textarea
              class="block p-2.5 w-full text-xs text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:border h-full"
              value={genEncoded()}
              style={{ resize: 'none' }}
            />
          </pre>
        </div>
        <div className='bg-white border p-4 rounded-lg flex-1 flex flex-col'>
          <div className="text-xl font-semibold text-blue-500 mb-3">Encoded URL</div>
          <pre className='flex-1'>
            <textarea
              class="block p-2.5 w-full text-xs text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:border h-full"
              value={genDecoded()}
              style={{ resize: 'none' }}
            />
          </pre>
        </div>

      </div>
    </div>
  );
}

export default App;
