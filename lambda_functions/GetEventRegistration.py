import json
import psycopg2

def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("SELECT id, name, phone_number, email FROM app_user WHERE EXISTS ( SELECT * FROM attendee WHERE app_user_id = id AND event_id = '" + event['pathParameters']['id'] + "')")
        conn.commit()
        records = cur.fetchall()
    data = []
    for i, record in enumerate(records):
        
        data.append({
            'id': record[0], 
            'name': record[1],
            'phone_number': record[2],
            'email': record[3]
        })
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        'body': data
    }
