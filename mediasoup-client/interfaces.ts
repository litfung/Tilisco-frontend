export interface IVideoOrientation {
  readonly camera: boolean; // Whether the source is a video camera
  readonly flip: boolean; // Whether the video source is flipped
  readonly rotation: number; // Rotation degrees (0, 90, 180 or 270)
}

export interface IIceSelectedTuple {
  readonly localIp: string;
  readonly localPort: number;
  readonly protocol: 'udp' | 'tcp';
  readonly remoteIp: string;
  readonly remotePort: number;
}

export interface ITransportStat {
  readonly availableIncomingBitrate: number;
  readonly bytesReceived: number;
  readonly bytesSent: number;
  readonly dtlsState: TState;
  readonly iceRole: 'controlled';
  readonly iceSelectedTuple: IIceSelectedTuple;
  readonly iceState: TState;
  readonly maxIncomingBitrate: number;
  readonly recvBitrate: number;
  readonly sctpState: TState;
  readonly sendBitrate: number;
  readonly timestamp: number;
  readonly transportId: string; // uuid
  readonly type: 'webrtc-transport';
}

export interface IPeerStat {
  readonly bitrate: number;
  readonly byteCount: number;
  readonly firCount: number;
  readonly fractionLost: number;
  readonly kind: TKind;
  readonly mimeType: string;
  readonly nackCount: number;
  readonly nackPacketCount: number;
  readonly packetCount: number;
  readonly packetsDiscarded: number;
  readonly packetsLost: number;
  readonly packetsRepaired: number;
  readonly packetsRetransmitted: number;
  readonly pliCount: number;
  readonly roundTripTime: number;
  readonly rtxSsrc: number;
  readonly score: number; // RTP stream score (from 0 to 10) representing the transmission quality.
  readonly ssrc: number;
  readonly timestamp: number;
  readonly type: 'outbound-rtp' | 'inbound-rtp';
}

export type TState = 'new' | 'connecting' | 'connected' | 'failed' | 'closed';
export type TPeer = 'producer' | 'consumer';
export type TKind = 'video' | 'audio';
