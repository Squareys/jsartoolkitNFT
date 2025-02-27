/*
 *  Utils.ts
 *  JSARToolKitNFT
 *
 *  This file is part of JSARToolKitNFT - WebARKit.
 *
 *  JSARToolKitNFT is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  JSARToolKitNFT is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with JSARToolKitNFT.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2020 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
import axios from 'axios'

export default class Utils {
  static async fetchRemoteData (url: string) {
    try {
      const response: any = await axios.get(url, { responseType: 'arraybuffer' })
      return new Uint8Array(response.data)
    } catch (error) {
      throw error
    }
  }

  static async fetchRemoteDataCallback (url: string, callback: any) {
    try {
      const response: any = await axios.get(url, { responseType: 'arraybuffer' })
      .then((response: any) => {
        const data = new Uint8Array(response.data)
        console.log(data);
        callback(response)
      })
      return response
    } catch (error) {
      throw error
    }
  }

  static string2Uint8Data (string: string) {
    const data = new Uint8Array(string.length)
    for (let i = 0; i < data.length; i++) {
      data[i] = string.charCodeAt(i) & 0xff
    }
    return data
  }
}
