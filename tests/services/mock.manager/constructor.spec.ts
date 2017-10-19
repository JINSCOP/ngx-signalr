import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { SignalRConnectionMockManager } from '../../../src/services/testing/signalr.connection.mock.manager';
import { ISignalRConnection } from '../../../src/services/connection/i.signalr.connection';
import { SignalRConnectionMock } from '../../../src/services/testing/signalr.connection.mock';

describe('SignalRConnectionMockManager', () => {

    it('constructor should initialize', () => {
        let sut = new SignalRConnectionMockManager();
        expect(sut.errors$ instanceof Subject).toBeTruthy();
        expect(sut.status$ instanceof Subject).toBeTruthy();
        expect(sut.mock instanceof SignalRConnectionMock).toBeTruthy();
    });
});

