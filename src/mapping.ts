import { Withdraw } from '../generated/Plasma Confirm Withdraw/WithdrawManager'
//import { toDecimal } from './numbers'
import { ProcessEntity } from '../generated/schema'
 

// token, from, amount, to
export function handleConfirmWithdraw(event: Withdraw): void {
   
  let confirmrEntity = new ProcessEntity(event.transaction.hash.toHex());
  confirmrEntity.exitId = event.params.exitId
  confirmrEntity.token = event.params.token 
  confirmrEntity.amount = event.params.amount
  confirmrEntity.transaction = event.transaction.hash

  
  confirmrEntity.save()
}